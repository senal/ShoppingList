using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ProductService.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ProductController: ControllerBase 
    {
        public ProductController()
        {
            
        }

        [HttpGet]
        public Task<string> Get() 
        {

            return Task.FromResult("Ola, this is the product service");
        }
    }
}