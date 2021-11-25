using System.ComponentModel.DataAnnotations;

namespace API_Departamento.ViewModels.FuncionariosViewModels
{
    public class CreateFuncionarioViewModel
    {
        [Required]
        [MaxLength(300)]
        public string Nome { get; set; }

        public string? Foto { get; set; }

        [Required]
        [MaxLength(13)]
        public string RG { get; set; }

        [Required]
        public int DepartamentoId { get; set; }
    }
}
