using System.Text.RegularExpressions;

namespace API_Departamento.Services
{
    public class ImgSaveService : IImgSaveService
    {
        public Guid SalvarImg(string imgUrl, string foto)
        {
            Guid fotoId = Guid.NewGuid();
            var data = new Regex(@"^data:image\/[a-z]+;base64,").Replace(foto, "");
            byte[] imageBytes = Convert.FromBase64String(data);
            System.IO.File.WriteAllBytes(Path.Combine(imgUrl, $"{fotoId}.png"), imageBytes);
            return fotoId;
        }
    }
}
