FROM openjdk:11-jre-slim
# Copy the file
COPY target/*.war app.war
# Run the application directly using Java
ENTRYPOINT ["java", "-jar", "app.war", "--server.port=80"]
