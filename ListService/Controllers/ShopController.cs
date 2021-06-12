using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Net.Http.Json;

namespace ListService.Controllers
{

    [ApiController]
    [Route("[controller]")]       
    public class ShopController : ControllerBase {
        private readonly HttpClient _httpClient;

        public ShopController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }


        [HttpGet]
        public async Task<IActionResult> GetAll ()
        {
            _httpClient.BaseAddress = new Uri("http://localhost:5002/");
            var res = await _httpClient.GetAsync("shop");
            if(res.IsSuccessStatusCode){
                var list = await res.Content.ReadFromJsonAsync<List<string>>();
                return Ok(list); 
            }
            return NotFound();
        }
    }
}