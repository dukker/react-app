#!/bin/sh -l

echo "::debug ::Debug Message"
echo "::warning ::Waring Message"
echo "::error ::Error Message"

echo "::add-mask::$1"

echo "Hello $1"
time=$(date)
echo "::set-output name=time::$time"

echo "::group::Some expandable logs"
echo "some stuff line1"
echo "some stuff line2"
echo "some stuff line3"
echo "::endgroup::"

echo "set-env name=HELLO::hello"
