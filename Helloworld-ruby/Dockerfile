FROM ruby:latest 

ENV http_proxy http://10.144.1.10:8080

# Bundle app source
COPY world.rb .

RUN gem install sinatra

EXPOSE  8080
CMD ["ruby", "world.rb"]	