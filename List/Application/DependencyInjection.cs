using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication (this IServiceCollection services, IConfiguration configuration)
        {
            /* Add all dependencies relates to application */

            return services;

        }
    }
}
