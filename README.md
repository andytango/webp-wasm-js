# WebP encoder and decoder

Extracted and built from Google's [Squoosh](https://github.com/GoogleChromeLabs/squoosh) app, packaged for NPM.

## Example

See `dec/example.html` and `enc/example.html`

## Decode API

### `int version()`

Returns the version of libwebp as a number. va.b.c is encoded as 0x0a0b0c

### `RawImage decode(std::string buffer)`

Decodes the given webp buffer into raw RGBA. `RawImage` is a class with 3 fields: `buffer`, `width`, and `height`.

### `void free_result()`

Frees the result created by `decode()`.

## Encode API

### `int version()`

Returns the version of libwebp as a number. va.b.c is encoded as 0x0a0b0c

### `UInt8Array encode(uint8_t* image_buffer, int image_width, int image_height, WebPConfig config)`

Encodes the given image with given dimension to WebP.

### `void free_result()`

Frees the last result created by `encode()`.
