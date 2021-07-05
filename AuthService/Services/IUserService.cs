using AuthService.Models;

namespace AuthService.Services
{
    public interface IUserService {
        void Create(User user);
        void Delete(User user);

        // require to pass the Bson object id
        void Get(string id);
        
    }
}