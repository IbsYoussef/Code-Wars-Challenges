package main

import (
	"fmt"
)

func main() {

	fmt.Println(Rps("rock", "scissors"))     // P1 WINS
	fmt.Println(Rps("rock", "paper"))        // P1 WINS
	fmt.Println(Rps("paper", "scissors"))    // P2 WINS
	fmt.Println(Rps("rock", "paper"))        // P2 WINS
	fmt.Println(Rps("scissors", "scissors")) // DRAW

}

func Rps(p1, p2 string) string {

	if p1 == "rock" && p2 == "scissors" {
		return "Player 1 won!"
	}
	if p1 == "scissors" && p2 == "rock" {
		return "Player 2 won!"
	}
	if p1 == "paper" && p2 == "rock" {
		return "Player 1 won!"
	}
	if p1 == "rock" && p2 == "paper" {
		return "Player 2 won!"
	}
	if p1 == "rock" && p2 == "paper" {
		return "Player 2 won!"
	}
	if p1 == "scissors" && p2 == "rock" {
		return "Player 2 won!"
	}
	if p1 == "scissors" && p2 == "paper" {
		return "Player 1 won!"
	}
	if p1 == "paper" && p2 == "scissors" {
		return "Player 2 won!"

	} else {
		return "Draw!"
	}
}
