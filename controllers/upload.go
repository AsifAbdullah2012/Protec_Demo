// controllers/upload.go
package controllers

import (
	"github.com/gin-gonic/gin"
)

func UploadFile(c *gin.Context) {
    file, _ := c.FormFile("file") // Get file
    c.SaveUploadedFile(file, "./uploads/"+file.Filename)
    c.JSON(200, gin.H{"message": "File uploaded successfully!"})
}
