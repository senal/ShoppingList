using System.Net.Http;
using System.Collections.Generic;
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
        public Task<IActionResult> GetAll()
        {
            var list = new List<string>();
            return Ok(new List<string>());
        }

        [HttpPost]
        public IActionResult Create()
        {
            var id = new global::System.Guid();
            return CreatedAtAction("Get", new {id = id}, id);
        }

        [HttpDelete]
        public IActionResult Delete()
        {
            return Ok();
        }
        
    }
    
}