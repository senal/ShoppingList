namespace AuthService.Models
{
    public class ShoopingContextSettings : IShoopingContextSettings {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}