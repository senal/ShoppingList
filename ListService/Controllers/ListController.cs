using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ListService.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ListController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public ListController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }


        [HttpGet]
        public Task<string> Get()
        {
            return Task.FromResult("Alooo, This is the list service");
        }

        [HttpGet]
        public Task<List<string>> GetAll()
        {
            return Task.FromResult("Alooo, This is the list service");
        }

        [HttpPost]
        public Task<IActionResult> Create()
        {
            return Ok();
        }

        [HttpPut]
        public Task<IActionResult> Create()
        {
            return Ok();
        }
        
        [HttpDelete]
        public Task<IActionResult> Delete()
        {
            return Ok();
        }



        
    }
    
}