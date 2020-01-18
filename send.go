package main

import (
	"context"
	"log"
	"net/smtp"

	"github.com/aws/aws-lambda-go/lambda"
)

func main() {

	lambda.Start(HandleRequest)

}

type MyEvent struct {
	To      string
	Message string
}

func HandleRequest(ctx context.Context, event MyEvent) (string, error) {
	return send(event.To, event.Message)
}

func send(to string, body string) (string, error) {
	from := "donotreplyoxfordlithograph@gmail.com"
	pass := "Testing1"

	msg := "From: " + from + "\n" +
		"To: " + to + "\n" +
		"Subject: Hello there\n\n" +
		body

	err := smtp.SendMail("smtp.gmail.com:587",
		smtp.PlainAuth("", from, pass, "smtp.gmail.com"),
		from, []string{to}, []byte(msg))

	if err != nil {
		log.Printf("smtp error: %s", err)

		return "", err
	}

	return "sent", nil
}
