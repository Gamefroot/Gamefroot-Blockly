#!/bin/bash
gsutil cp -r src gs://static.gamefroot.com/blockly/2.2.0/
gsutil -m setmeta -h "Cache-Control:public, max-age=60" gs://static.gamefroot.com/blockly/2.1.0/src/*
