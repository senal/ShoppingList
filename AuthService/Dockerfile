# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
COPY bin/Release/net5.0/publish/ app/
WORKDIR /app
ENV ASPNETCORE_URLS http://*:4999
ENTRYPOINT [ "dotnet", "ListService.dll" ]