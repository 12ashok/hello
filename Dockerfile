# Use the official Eclipse Temurin image instead of the deprecated openjdk image
FROM eclipse-temurin:11-jre-alpine

# Copy your WAR/JAR file
COPY target/*.war app.war

# Run the app. Note: we tell Spring to listen on 8090 since that's what your logs showed
ENTRYPOINT ["java", "-jar", "app.war", "--server.port=8090"]
