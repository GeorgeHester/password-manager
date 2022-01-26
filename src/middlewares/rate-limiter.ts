/*
    Imported module(s)
*/
import rateLimiter, { RateLimitRequestHandler } from 'express-rate-limit';

/*
    Function to rate limit request
*/
function limiter(window: number, requests: number): RateLimitRequestHandler
{
    return rateLimiter({
        windowMs: window,
        max: requests,
        statusCode: 429,
        message: {
            type: "error",
            data: {
                detail: "You have made too many requests, try again soon"
            }
        }
    });
};

/*
    Module export
*/
export = limiter;