using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Net.Http.Json;
using System.Linq;

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
            _httpClient.BaseAddress = new Uri("http://shopservice-clusterip-srv:5002/");
            var res = await _httpClient.GetAsync("shop");
            if(res.IsSuccessStatusCode){
                var shops = await res.Content.ReadFromJsonAsync<List<string>>();
                var shopWithPrefix = shops?.Select(i => $"Displaying shops from list service: {i}").ToList();
                return Ok(shopWithPrefix); 
            }
            return NotFound();
        }
    }
}