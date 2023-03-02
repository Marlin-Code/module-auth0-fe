#!/bin/bash
RED='\033[1;41m'
GREEN='\033[1;42m'
NC='\033[0m' # No Color
if [ "$npm_package_config_cloudFormationStackName" = "" ]
then
  echo -e "${RED}Stack name not configured, please insert config.cloudFormationStackName name in package.json${NC}"
  exit 100
else
    echo -e "${GREEN}Pre Deploy Infrastructure Checks successful${NC}"
fi