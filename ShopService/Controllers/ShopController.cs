using System.Net.Http;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ShopService.Controlllers
{

    [ApiController]
    [Route("[controller]")]
    public class ShopController: ControllerBase 
    {
        private readonly HttpClient _httpClient;

        public ShopController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpGet("name")]
        public Task<string> Get(string name)
        {
            return Task.FromResult($"Returns the information of {name}");        
        }

        [HttpGet("id")]
        public Task<string> Get(int id)
        {
            return Task.FromResult($"Returns the name of {id}");
        }


        [HttpGet]
        public Task<List<string>> GetAll () 
        {
            List<string> list = new() { "Coles", "WoolWorths", "Aldi", "IGA", "Costco", "FoodWorks", "Foodland", "HarisFarm"};
            return Task.FromResult(list);
        }

    }
}