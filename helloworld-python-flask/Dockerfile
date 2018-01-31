FROM alpine:3.1

# Update
ENV http_proxy http://10.144.1.10:8080
RUN apk add --update python py-pip

# Install app dependencies
RUN pip --proxy http://10.144.1.10:8080 install Flask

# Bundle app source
COPY app.py .

EXPOSE  8080
CMD ["python", "app.py"]
