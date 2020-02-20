import pythonlogo from './imgs/python-logo.png'
import Terraform from './imgs/Terraform.png'

const Softwaredata = [{
    mainHeader: "Amazon Web Services Boto3",
    img: {src:pythonlogo, alt:"Python pic"},
    Des: "The point of these three small programs was so that I was able to control some ec2 instance using the boto3 library.  The three programs allowed me to stop and start an EC2 Instance.  Secondly, to change the type of the isntance.  To change the Volume name to the Instance Name so I was able to see what volume belongs to what instance more clearly.   All three of these programs helped me save time, allow quicker and more direct ways of changing EC2 Instances.",
    gitsrc: "https://github.com/Jdavies91/Python-Script-for-Aws",
    technology:["AWS EC2 Instances","Boto 3 library","Python3"]
    }    ,{
        mainHeader: "Keboola ETL Terraform",
        img: {src:Terraform, alt:"Terraform"},
        Des: "The point of the program was to make Keboola there own terraform provider.  In doing this, we needed to work with there ETL platform.  Doing this, we created a Go program to deploy the terraform script for each of these components.  Creating this program allows them to create a full ETL cycle without even touching there GUI and just running there terraform file.",
        gitsrc: "https://github.com/jkwcp/terraform-provider-keboola",
        technology:["Go lang","Terraform","Keboolas API", "HTTP Request","Amazon RedShift", "MySql", "Googledrive", "Dropbox", "MySQL","SQL Server", "Amazon S3","SnowFlake"]
    }
]

export default Softwaredata