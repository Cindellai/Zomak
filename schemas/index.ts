import { blogPost } from './documents/blogPost'
import { location } from './documents/location'
import { provider } from './documents/provider'
import { service } from './documents/service'
import { serviceCategory } from './documents/serviceCategory'
import { siteSettings } from './documents/siteSettings'
import { testimonial } from './documents/testimonial'
import { walkInStatus } from './documents/walkInStatus'

export const schemaTypes = [siteSettings, walkInStatus, location, serviceCategory, service, provider, testimonial, blogPost]
