namespace AuthService.Models
{
    public interface IShoopingContextSettings {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}  