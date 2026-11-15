= An inconvenient problem
Suppose we were given an ordinary GCD problem
== Find the greatest common factor between 119 and 221 

The common method of finding factors does not seem to work well for numbers like 119 and 221 where there are no easily recognizable factors.

$ gcd(221,119)=? $
Let us reframe the question with some simpler numbers: *21 and 14*. Factoring tells us the $gcd(21,14)=7$

Now, observe what we are about to do. First subtract the two number.
$ 21-14 = 7 $ Interesting, the new number we get is also divisible by the GCD of the two numbers. Does this hold true for multiple numbers, lets check.

#table(
  columns: (1fr, 1fr, 1fr),
  table.header(
    [Numbers], [GCD], [Difference]
  ),
  [$(30,5)$], [$5$], [$25$],
  [$(100,10)$], [$10$], [$90$],
  [$(16,4)$], [$4$], [$12$],
)

Yes! All of following are also divisible by their GCD.

=== Hidden relationship
From our trials we can see how there is a relationship between the difference and GCD of two numbers. Then does this suggest that can convert this bigger problem into a simpler one while preserving the common factors, think about that for a minute, two pairs of numbers, one simpler and one larger and both having the same answer. We will experiment about this.

By this logic
we can rewrite,

$ gcd(221,119)=gcd(119,102) $
which is not that much easier to the original question, but can we subtract these two number again? Yes, we can and doing so we get
$ &=gcd(102,17) \
  &=17
$
 Doing a quick check we see 102=$6*17$ we see
17 as the highest common factor and as we have noted above how there exists a relationship we can also say, $ &gcd(221,119)\
&=gcd(119,102)\
&=gcd(102,17)\
&=17 $

From our little example we can come to the conclusion that *GCD of two numbers is equal to GCD of the difference and any of the two numbers *
$ gcd(30,5)=gcd(25,5) =5 $

== But why?
Can we prove that this method will work for any pair of positive integers?

For that we need to define what a common factor is. A common factor is a number that divides both number without a remainder i.e the remainder must be 0.
Suppose there are two numbers *$a d$* and *$c d$* such that $d$ is the highest common factor and $a ,c $ are coprime
$ gcd(a d,c d)=d $
Now lets subtract the two numbers, assuming $a >= c$.
$ a d-c d =d(a-c) $
Aha! Subtracting preserved the common factor.
lets us also add
$ a d + c d=d(c+a) $
which also preserved the common factor, but we have to confirm that this process did not create a new common factor. Lets check for that too.

Suppose when we subtracted the numbers it brought some new factors then that new common factor must divide the two numbers $d(a-c), c d$ and their sum too as we have seen addition also preserves common factors.
$ d(a-c)+c d=a d $

However, this means that the supposedly new common factor divides both $a d$ and $c d$, the two numbers we started with. So was it ever a new common factor?

Every common factor that exists after subtraction was there from the very beginning and every original common factor is preserved by subtraction.Then we can say, no common factors are created or lost, and the greatest common factor remains unchanged.

Thus
$ &gcd(a d, c d)\
&=gcd(d(a-c), c d)\
&=d $
where d is the highest common factor.
We can also Add, for any two numbers $gcd(a,b)=gcd(a+b,b)$ but we don't usually use this as it makes the numbers larger which is of no use when we want to simplify the expression

== Should you stop?
When should we stop the process?
You can repeat this process till the GCD can be easily recognized or when one of the numbers equals 0. When one of the numbers equals 0, the other number is the GCD. For example $gcd(5,0)=5$ and $gcd(0,5)=5$.

=== How do we know it will end?
In this process we are always subtracting the smaller number from the larger. Since both numbers are positive integers, each subtraction decreases their sum. This process cannot continue forever and eventually one of the numbers must become 0.

== Next steps
Now for some longer question repeatedly subtracting can get tedious and so we divide and take remainders as shortcut.

For example, consider $gcd(40,4)$.
Instead of subtracting 4 from 40 ten times, we can simply divide, which is shown below.
$ 40=10(4)+0 $
which gives us $gcd(4,0)$ and thus GCD is 4.

Lets try 42,12

$ gcd(42,12) $

Using our original method of we get
$ 42-12-12-12 &=6 \
  42-3(12) &=6 \
  42 &=3(12)+6
$

Notice how we had to subtract 12 three times to get 6 as an answer. Instead of repeated arithmetic, we could simply divide 42 by 12 and take the remainder.

$ 42=3(12)+6 $

Now we can rearrange the GCD problem as $gcd(12,6)$ And now by looking we can guess the GCD must be 6, using the algorithm once again we obtain

$ 12=2(6)+0 $

$ gcd(12,6)=gcd(6,0)=6 $

Division is not a new method, its is just repeated substraction, that makes our method faster and easier. Thus we no need to prove this seperately.

So *Division* is the next step of making this method even faster, by doing so we have reinvented the Euclidean algorithm.