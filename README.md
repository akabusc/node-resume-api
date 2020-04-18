# node-resume-api
Node Resume Api

# Local Development

In order to verify functionality in relation to AWS, run the following commands:
1. `sam build -t local-template.yaml`
1.  `sam local invoke PutResumeNodeFunction`
1. `sam local invoke GetResumeNodeFunction`

Note:
The above steps will likely change over time.