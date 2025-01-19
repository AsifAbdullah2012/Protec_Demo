package main

import (
	"github.com/asif/backend/controllers"

	"github.com/gin-gonic/gin"

	"github.com/gin-contrib/cors"
)

func main() {
    r := gin.Default()

	r.Use(cors.Default())

    // Simple health check
    r.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{"message": "pong"})
    })

	r.POST("/search", controllers.Search)

    r.Run("localhost:8080") // Start server on port 8080
	
}
