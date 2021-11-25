using API_Departamento.Models;
using API_Departamento.ViewModels.FuncionariosViewModels;

namespace API_Departamento.ViewModels.DepartamentosViewModels
{
    public class ListDepartamentoViewModel
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Sigla { get; set; }


        public ListDepartamentoViewModel()
        {

        }

        public ListDepartamentoViewModel(Departamento departamento)
        {
            Id = departamento.Id;
            Nome = departamento.Nome;
            Sigla = departamento.Sigla;
        }

        public static implicit operator ListDepartamentoViewModel(Departamento departamento)
        {
            return new ListDepartamentoViewModel
            {
                Id = departamento.Id,
                Nome = departamento.Nome,
                Sigla = departamento.Sigla,

            };
        }
    }
}
