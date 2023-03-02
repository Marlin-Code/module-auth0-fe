#!/bin/bash
cloudFrontId=$(aws cloudformation describe-stack-resource --stack-name $npm_package_config_cloudFormationStackName --logical-resource-id CloudFrontDistribution --query StackResourceDetail.PhysicalResourceId)
cloudFrontId="${cloudFrontId%\"}"
cloudFrontId="${cloudFrontId#\"}"
domainName=$(aws cloudfront get-distribution --id $cloudFrontId --query Distribution.DomainName)
bucketName=$(aws cloudformation describe-stack-resource --stack-name $npm_package_config_cloudFormationStackName --logical-resource-id WebsiteBucket --query StackResourceDetail.PhysicalResourceId)

GREEN='\033[1;42m'
NC='\033[0m' # No Color
echo -e "${GREEN}Please copy this bucket name into the config.deploymentBucket property in your package.json file${NC}"
echo "BucketName": $bucketName
echo -e "\n\n"
echo "After building and deploying your app, it will be available at this url:"
echo "DomainName": ${domainName}
echo -e "\n"
