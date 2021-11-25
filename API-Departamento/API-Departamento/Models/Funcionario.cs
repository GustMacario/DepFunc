using System.ComponentModel.DataAnnotations;

namespace API_Departamento.Models
{
    public class Funcionario
    { 
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(300)]
        public string Nome { get; set; }

        public Guid? Foto { get; set; }

        [Required]
        [MaxLength(13)]
        public string RG { get; set; }

        [Required]
        public int DepartamentoId { get; set; }

        public Departamento Departamento { get; set; }

    }
}
