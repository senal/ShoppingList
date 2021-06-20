FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine AS publish
WORKDIR /src
COPY ListService.csproj ./

# specify target runtime for destroy
RUN dotnet restore "./ListService.csproj" --runtime alpine-x64
COPY . .

# optimized dotnet publish
RUN dotnet publish "ListService.csproj" -c Release -o /app/publish \
    --runtime alpine-x64 \
    --self-contained true \
    /p:PublishTrimmed=true \
    /p:PublishSingleFile=true

# use different image
FROM mcr.microsoft.com/dotnet/runtime-deps:5.0-alpine AS final
WORKDIR /app

COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS http://*:5000
# new ENTRYPOINT (no more .dll is generated)
ENTRYPOINT ["./ListService"]