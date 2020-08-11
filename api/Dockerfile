FROM ruby:2.6.6

RUN apt-get update -qq && apt-get install -y build-essential    

# 作業ディレクトリの作成、設定
RUN mkdir /rails_api
##作業ディレクトリ名をAPP_ROOTに割り当てて、以下$APP_ROOTで参照
ENV APP_ROOT /rails_api
WORKDIR $APP_ROOT

ADD Gemfile $APP_ROOT/Gemfile
ADD Gemfile.lock $APP_ROOT/Gemfile.lock

# Gemfileのbundle install
RUN bundle install
ADD . $APP_ROOT
