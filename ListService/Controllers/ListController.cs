using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ListService.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ListController : ControllerBase
    {
        private readonly HttpClient httpClient;

        public ListController(HttpClient httpClient)
        {
            this.httpClient = httpClient;
        }


        [HttpGet]
        public Task<string> Get()
        {
            return Task.FromResult("Alooo, This is the list service");
        }


        
    }
    
}