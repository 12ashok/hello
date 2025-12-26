# Use official Tomcat image
FROM tomcat:9.0-jdk11

# Remove default apps (optional, clean Tomcat)
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy your WAR file to Tomcat's webapps folder as ROOT.war
COPY helloworld-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war

# Change Tomcat port from 8080 to 8090
RUN sed -i 's/port="8080"/port="8090"/' /usr/local/tomcat/conf/server.xml

# Expose the new port
EXPOSE 8090

# Start Tomcat
CMD ["catalina.sh", "run"]

