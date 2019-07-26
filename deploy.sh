#!/bin/bash
gsutil cp blockly_toolbox.xml gs://static.gamefroot.com/blockly/2.2.0/
gsutil cp -r src gs://static.gamefroot.com/blockly/2.2.0/
gsutil -m setmeta -r -h "Cache-Control:public, max-age=60" gs://static.gamefroot.com/blockly/2.2.0/*
