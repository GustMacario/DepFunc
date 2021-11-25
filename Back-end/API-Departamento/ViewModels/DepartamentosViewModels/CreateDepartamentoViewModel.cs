using System.ComponentModel.DataAnnotations;

namespace API_Departamento.ViewModels.DepartamentosViewModels
{
    public class CreateDepartamentoViewModel
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(300)]
        public string Nome { get; set; }

        [Required]
        [MaxLength(15)]
        public string Sigla { get; set; }


    }
}
