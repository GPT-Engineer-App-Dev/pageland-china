import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 bg-gray-100">
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/50x50" alt="Logo" />
          <nav className="space-x-4">
            <a href="#home" className="text-lg">Home</a>
            <a href="#about" className="text-lg">About Us</a>
            <a href="#services" className="text-lg">Services</a>
            <a href="#contact" className="text-lg">Contact Us</a>
          </nav>
        </div>
        <div>
          <Button variant="outline">EN</Button>
          <Button variant="outline" className="ml-2">中文</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">欢迎来到我们的公司</h1>
          <h2 className="text-2xl mt-4">Welcome to Our Company</h2>
          <p className="mt-4 text-lg">我们提供最好的服务</p>
          <p className="text-lg">We Provide the Best Services</p>
          <Button className="mt-8">了解更多</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center">关于我们</h2>
        <h3 className="text-2xl text-center mt-2">About Us</h3>
        <p className="mt-4 text-center">我们是一家致力于提供优质服务的公司。</p>
        <p className="text-center">We are a company dedicated to providing quality services.</p>
        <div className="flex justify-center mt-8">
          <img src="https://placehold.co/600x400" alt="About Us" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center">我们的服务</h2>
        <h3 className="text-2xl text-center mt-2">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>服务一</CardTitle>
              <CardTitle>Service One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>这是我们的第一个服务。</p>
              <p>This is our first service.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>服务二</CardTitle>
              <CardTitle>Service Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>这是我们的第二个服务。</p>
              <p>This is our second service.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>服务三</CardTitle>
              <CardTitle>Service Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>这是我们的第三个服务。</p>
              <p>This is our third service.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center">客户评价</h2>
        <h3 className="text-2xl text-center mt-2">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Card>
            <CardHeader>
              <Avatar src="https://placehold.co/100x100" alt="Customer 1" />
              <CardTitle>客户一</CardTitle>
              <CardTitle>Customer One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>这是客户一的评价。</p>
              <p>This is a testimonial from customer one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar src="https://placehold.co/100x100" alt="Customer 2" />
              <CardTitle>客户二</CardTitle>
              <CardTitle>Customer Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>这是客户二的评价。</p>
              <p>This is a testimonial from customer two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar src="https://placehold.co/100x100" alt="Customer 3" />
              <CardTitle>客户三</CardTitle>
              <CardTitle>Customer Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>这是客户三的评价。</p>
              <p>This is a testimonial from customer three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center">联系我们</h2>
        <h3 className="text-2xl text-center mt-2">Contact Us</h3>
        <div className="max-w-2xl mx-auto mt-8">
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">姓名</Label>
              <Label htmlFor="name" className="ml-2">Name</Label>
              <Input id="name" placeholder="请输入您的姓名" />
            </div>
            <div>
              <Label htmlFor="email">电子邮件</Label>
              <Label htmlFor="email" className="ml-2">Email</Label>
              <Input id="email" type="email" placeholder="请输入您的电子邮件" />
            </div>
            <div>
              <Label htmlFor="message">信息</Label>
              <Label htmlFor="message" className="ml-2">Message</Label>
              <Textarea id="message" placeholder="请输入您的信息" />
            </div>
            <Button type="submit">发送</Button>
          </form>
          <div className="mt-8">
            <p>电话: 123-456-7890</p>
            <p>Email: info@example.com</p>
            <p>地址: 123 Main St, City, Country</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-gray-100">
        <div className="flex justify-between items-center">
          <div className="space-x-4">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="space-x-4">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <Separator className="my-4" />
        <p className="text-center">© 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;