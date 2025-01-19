// controllers/search.go
package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Search(c *gin.Context) {
// Parse the JSON request body
var request struct {
	Query string `json:"query"`
}

if err := c.ShouldBindJSON(&request); err != nil {
	// Return error if request parsing fails
	c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
	return
}

// Example: Perform a search based on the Query parameter
query := request.Query

// Simulated search logic
results := []string{
	"Result 1 for " + query,
	"Result 2 for " + query,
}

// Return the search results
c.JSON(http.StatusOK, gin.H{"results": results})
}
