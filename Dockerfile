# Changed from 11 to 17
FROM eclipse-temurin:17-jre-alpine

COPY target/*.war app.war

# Run the app
ENTRYPOINT ["java", "-jar", "app.war", "--server.port=8090"]
