import { blogPost } from './documents/blogPost'
import { location } from './documents/location'
import { provider } from './documents/provider'
import { service } from './documents/service'
import { siteSettings } from './documents/siteSettings'
import { testimonial } from './documents/testimonial'

export const schemaTypes = [siteSettings, location, service, provider, testimonial, blogPost]
