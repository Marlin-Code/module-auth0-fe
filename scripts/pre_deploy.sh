#!/bin/bash
RED='\033[1;41m'
GREEN='\033[1;42m'
NC='\033[0m' # No Color
if [ "$npm_package_config_cloudFormationStackName" = "" ]
then
  echo -e "${RED}Stack name not configured, please insert bucket name in package.json${NC}"
  exit 100
elif [ "$npm_package_config_deploymentBucket" = "" ]
then
  echo -e "${RED}Deployment bucket not configured, please insert bucket name in package.json${NC}"
  exit 100
else
    echo "Pre Deploy Checks successful"
fi