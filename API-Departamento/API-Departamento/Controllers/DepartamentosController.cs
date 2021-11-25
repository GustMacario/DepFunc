using API_Departamento.Context;
using API_Departamento.Models;
using API_Departamento.ViewModels.DepartamentosViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API_Departamento.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartamentosController : ControllerBase
    {
        private readonly AppDbContext _context;
        public DepartamentosController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> Listar()
        {
            var departamentos = await _context.Departamentos.Select(departamento => (ListDepartamentoViewModel)departamento).ToListAsync();
            return Ok(departamentos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ListDepartamentoViewModel>> ListarEspecifico([FromRoute] int id)
        {
            var esch = Request.Scheme;
            var hst = Request.Host;
            var departamento = await _context.Departamentos.Include(departamento => departamento.Funcionarios).FirstOrDefaultAsync(departamento => departamento.Id == id);
            if (departamento == null)
            {
                return BadRequest();
            }
            return Ok(new ListDepartamentoFuncionarioViewModel(departamento, $"{ esch }://{hst}/app-images/"));
        }

        [HttpPost]
        public async Task<IActionResult> Postar(CreateDepartamentoViewModel model)
        {
            var departamento = new Departamento
            {
                Nome = model.Nome,
                Sigla = model.Sigla,
            };

            await _context.Departamentos.AddAsync(departamento);
            await _context.SaveChangesAsync();
            return Created("", model);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Editar(CreateDepartamentoViewModel model, [FromRoute] int id)
        {
            if (!_context.Departamentos.Any(departamento => departamento.Id == id))
            {
                return NotFound();
            }
            var departamento = new Departamento
            {
                Id = id,
                Nome = model.Nome,
                Sigla = model.Sigla,
            };

            _context.Update(departamento);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletar([FromRoute] int id)
        {
            var departamento = await _context.Departamentos.FirstOrDefaultAsync(departamento => departamento.Id == id);
            _context.Departamentos.Remove(departamento);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}


