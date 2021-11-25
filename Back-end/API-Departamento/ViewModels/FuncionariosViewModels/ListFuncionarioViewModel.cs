using API_Departamento.Models;
using API_Departamento.ViewModels.DepartamentosViewModels;

namespace API_Departamento.ViewModels.FuncionariosViewModels
{
    public class ListFuncionarioViewModel
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string? Foto { get; set; }

        public string RG { get; set; }

        public int DepartamentoId { get; set; }

        
        public ListFuncionarioViewModel()
        {

        }

        public ListFuncionarioViewModel(Funcionario funcionario, string fotoUrl)
        {
            Id = funcionario.Id;
            Nome = funcionario.Nome;
            RG = funcionario.RG;
            Foto = fotoUrl + funcionario.Foto.ToString() + ".png";
            DepartamentoId = funcionario.DepartamentoId;
        }

        public static implicit operator ListFuncionarioViewModel(Funcionario funcionario)
        {
            return new ListFuncionarioViewModel
            {
                Id = funcionario.Id,
                Nome = funcionario.Nome,
                RG = funcionario.RG,
                Foto = funcionario.Foto.ToString() + ".png",
                DepartamentoId = funcionario.DepartamentoId,
            };
        }
    }
}
