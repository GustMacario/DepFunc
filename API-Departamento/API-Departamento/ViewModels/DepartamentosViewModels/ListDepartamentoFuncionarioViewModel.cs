using API_Departamento.Models;
using API_Departamento.ViewModels.DepartamentosViewModels;
using API_Departamento.ViewModels.FuncionariosViewModels;

namespace API_Departamento.ViewModels.DepartamentosViewModels
{
    public class ListDepartamentoFuncionarioViewModel : ListDepartamentoViewModel
    {

        public List<ListFuncionarioViewModel> Funcionarios { get; set; }

        public ListDepartamentoFuncionarioViewModel(Departamento departamento, string fotoUrl): base(departamento)
        {
            Funcionarios = departamento.Funcionarios?.Select(funcionario => new ListFuncionarioViewModel(funcionario, fotoUrl)).ToList();
        }
       
    }
}
