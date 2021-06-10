FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
WORKDIR /app


# copy project file to restore packages
COPY *.csproj ./
RUN dotnet restore

# copy all files then run build
COPY ./ ./
RUN dotnet publish -c Release -o out

# build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT [ "dotnet", "shopservice.dll" ]
