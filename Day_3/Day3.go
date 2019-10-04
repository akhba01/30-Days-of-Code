package main

import "fmt"

func main() {
    var n int

    for {
        fmt.Scan(&n)
        if n >= 1 && n <= 100 {
            break
        }
    }

    if n%2 == 0 {

        switch {

        case 'n' >= 2 && n <= 5:

            fmt.Println("Not Weird")
            break

        case 'n' >= 6 && n <= 20:

            fmt.Println("Weird")
            break

        default:
            fmt.Println("Not Weird")
            break
        }

    } else {
        
        fmt.Println("Weird")
    }
}
