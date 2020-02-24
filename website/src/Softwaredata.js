import pythonlogo from './imgs/python-logo.png'
import Terraform from './imgs/Terraform.png'

const Softwaredata = [{
    mainHeader: "Amazon Web Services Boto3",
    img: {src:pythonlogo, alt:"Python pic"},
    Des: "The purpose of these three programs was to allow a user to control an  EC2 Instance using the Python Boto3 library.  The first program allows the user to stop and start an EC2 Instance.  The second program allows the user to change the type of EC2 instance.  The third program allows the user to change the Volume Name to the EC2 Instance Name so the user can see which Volume belongs to which EC2 Instance more clearly.   All three of these programs helped me save time and allowed a quicker and more direct way of changing EC2 Instances.",
    gitsrc: "https://github.com/Jdavies91/Python-Script-for-Aws",
    technology:["AWS EC2 Instances","Boto3","Python 3"]
    }    ,{
        mainHeader: "Keboola ETL Terraform",
        img: {src:Terraform, alt:"Terraform"},
        Des: "The point of the program was to make Keboola there own terraform provider.  In doing this, we needed to work with there ETL platform.  Doing this, we created a Go program to deploy the terraform script for each of these components.  Creating this program allows them to create a full ETL cycle without even touching there GUI and just running there terraform file.",
        gitsrc: "https://github.com/jkwcp/terraform-provider-keboola",
        technology:["Go","Terraform","Keboolas API", "HTTP Request","Amazon Redshift", "MySql", "Google Drive", "Dropbox", "MySQL","Microsoft SQL Server", "Amazon S3","Snowflake"]
    }
]

export default Softwaredata