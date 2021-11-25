using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace API_Departamento.Models
{
    public class Departamento
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(300)]
        public string Nome { get; set; }

        [Required]   
        [MaxLength(15)]
        public string Sigla { get; set; }

        public ICollection<Funcionario> Funcionarios { get; set; }

    }
}
