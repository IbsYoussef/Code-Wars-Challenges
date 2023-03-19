package main

import (
	"fmt"
	"strings"
)

func main() {

	fmt.Println(StringToArray("Robin Singh"))

}

func StringToArray(str string) []string {
	StringArray := strings.Split(str, ",")
	return StringArray
}
