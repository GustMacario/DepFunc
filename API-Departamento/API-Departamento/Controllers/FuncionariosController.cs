using API_Departamento.Context;
using API_Departamento.Models;
using API_Departamento.Services;
using API_Departamento.ViewModels.FuncionariosViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

namespace API_Departamento.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FuncionariosController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;
        private readonly AppDbContext _context;
        private readonly IImgSaveService _imgSaveService;
        public FuncionariosController(AppDbContext context, IWebHostEnvironment env, IImgSaveService imgSaveService)
        {
            _env = env;
            _context = context;
            _imgSaveService = imgSaveService;
        }

        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            var esch = Request.Scheme;
            var hst = Request.Host;
            var funcionarios = await _context.Funcionarios.ToListAsync();
           
            return Ok(funcionarios.Select(funcionario => new ListFuncionarioViewModel
            {
                Id = funcionario.Id,
                Nome = funcionario.Nome,
                Foto = funcionario.Foto.HasValue ? $"{esch}://{hst}/app-images/{funcionario.Foto}.png" : null,
                RG = funcionario.RG,
                DepartamentoId = funcionario.DepartamentoId,
            }));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ListFuncionarioViewModel>> ListarEspecifico([FromRoute] int id)
        {
            var funcionario = await _context.Funcionarios.FirstOrDefaultAsync(funcionario => funcionario.Id == id);
            if (funcionario == null)
            {
                return BadRequest();
            }
            return Ok((ListFuncionarioViewModel)funcionario);
        }

        [HttpPost]
        public async Task<IActionResult> Postar(CreateFuncionarioViewModel model)
        {
            Guid? FotoId = null;
            if (!string.IsNullOrEmpty(model.Foto))
            {
                FotoId = _imgSaveService.SalvarImg(Path.Combine(_env.WebRootPath, "app-images"), model.Foto);
            }
            var funcionario = new Funcionario
            {
                Nome = model.Nome,
                RG = model.RG,
                DepartamentoId = model.DepartamentoId,
                Foto = FotoId
            };
            await _context.Funcionarios.AddAsync(funcionario);
            await _context.SaveChangesAsync();
            return Created("",(ListFuncionarioViewModel) funcionario);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Editar(CreateFuncionarioViewModel model, [FromRoute] int id)
        {

            var funcionario = await _context.Funcionarios.FindAsync(id);
            if (funcionario is null)
            {
                return NotFound();
            }

            if (!string.IsNullOrEmpty(model.Foto)) 
            {
                funcionario.Foto = _imgSaveService.SalvarImg(Path.Combine(_env.WebRootPath, "app-images"), model.Foto);
            }
            funcionario.Nome = model.Nome;
            funcionario.RG = model.RG;

            await _context.SaveChangesAsync();
            return Ok(funcionario);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletar([FromRoute] int id)
        {
            var funcionario = await _context.Funcionarios.FirstOrDefaultAsync(funcionario => funcionario.Id == id);
            _context.Funcionarios.Remove(funcionario);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
