FROM ruby:2.7
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    default-mysql-client \
    yarn
RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
RUN export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

WORKDIR /RailsReact
COPY Gemfile Gemfile.lock /RailsReact/
RUN bundle install
RUN rails webpacker:install
COPY . /RailsReact

CMD ["rails", "server", "-b", "0.0.0.0"]